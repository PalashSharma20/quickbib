import CSL from "citeproc";
// require("@citation-js/plugin-csl");
// const { Cite, plugins } = require("@citation-js/core");

export function isValidURL(url) {
  return /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(
    url
  );
}

export function isValidISBN(isbn) {
  return /^[0-9Xx]*$/.test(isbn) && (isbn.length == 10 || isbn.length == 13);
}

export function proccessCitation(citation) {
  let modified = {
    id: citation.routeKey,
    type: citation.type == "URL" ? "webpage" : "book",
    title: citation.article_title,
    publisher: citation.web_title
  };
  if (citation.last_name && citation.last_name != "") {
    modified.author = [];
    modified.author[0] = {};
    modified.author[0].family = citation.last_name;
    if (citation.first_name && citation.first_name != "") {
      modified.author[0].given = citation.first_name;
    }
  }
  if (citation.date && citation.date != "") {
    modified.issued = {};
    modified.issued.raw = citation.date.split("T")[0];
  }
  if (citation.created_at && citation.created_at != "") {
    let created_at = citation.created_at;
    created_at = created_at.split(" ")[0];
    modified.accessed = {};
    modified.accessed.raw = created_at;
  }
  modified[citation.type] = citation.source;
  // if (citation.type == "URL") {
  // 	modified[citation.type] = `<a href="${modified[citation.type]}">${modified[citation.type]}</a>`;
  // }
  return modified;
}

async function getStyle(url) {
  let style = await fetch(url);
  return style.text();
}

// export async function format(style, bib) {
//   let key = style.key.replace("dependent/", ""),
//     template = await getStyle(`https://www.zotero.org/styles/${key}`);

//   if (style.key.includes("dependent/")) {
//     let parser = new DOMParser(),
//       xmlDoc = parser.parseFromString(template, "text/xml"),
//       parent = xmlDoc
//         .querySelector('link[rel="independent-parent"]')
//         .getAttribute("href")
//         .replace("http:", "https:");
//     template = await getStyle(parent);
//   }

//   let config = plugins.config.get("csl");
//   config.templates.add(key, template);

//   let cite = new Cite(Object.values(bib));
//   console.log(cite.data);
//   // return cite.data;
// }

export async function format(style, bib) {
  let key = style.key.replace("dependent/", ""),
    styleAsText = await getStyle(`https://www.zotero.org/styles/${key}`);
  if (style.key.includes("dependent/")) {
    let parser = new DOMParser(),
      xmlDoc = parser.parseFromString(styleAsText, "text/xml"),
      parent = xmlDoc
        .querySelector('link[rel="independent-parent"]')
        .getAttribute("href")
        .replace("http:", "https:");
    styleAsText = await getStyle(parent);
  }
  let sys = {
    retrieveLocale(lang) {
      let xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        `https://raw.githubusercontent.com/citation-style-language/locales/master/locales-${lang}.xml`,
        false
      );
      xhr.send(null);
      return xhr.responseText;
    },
    retrieveItem(id) {
      return bib[id];
    }
  };
  let citeproc = new CSL.Engine(sys, styleAsText);
  citeproc.updateItems(Object.keys(bib));
  return citeproc.makeBibliography();
}
