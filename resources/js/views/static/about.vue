<template>
  <div>
    <div class="section">
      <div class="container small">
        <h2 style="font-size:20px;padding-bottom:30px;text-align: center">A PALASH SHARMA PROJECT</h2>
        <p>
          I got sick of the other citation generators on the internet as they were full of advertisements, which made them slow and annoying. This led me to create QuickBib. This citation generator has grown and evolved with time,
          offering perhaps the best citation experience there is. QuickBib is perfect for both students and teachers to easily create citations and bibliographies.
        </p>
      </div>
      <div class="section texture texture--hypnotize" style="margin: 50px 0 0; padding: 30px 0;">
        <div class="img interface"></div>
      </div>
      <div class="container small">
        <h2>A Beautiful Interface</h2>
        <p>QuickBib has been specifically designed to meet the needs of students and teachers. Our design makes bibliographies easy, smooth, and hassle-free.</p>
      </div>
    </div>
    <div class="section">
      <div class="grid container large">
        <div class="grid-box">
          <h2>Automatically Fetches Information With High Accuracy</h2>
          <p>
            We follow the latest standards and styles, and automatically fetch the required information, with high accuracy. (Although it is still recommended that users check and verify the information before creating
            the citation.)
          </p>
        </div>
        <div class="grid-box small right texture texture--hex">
          <div class="form flex flex__center">
            <Input class="small" value="Graham" label="First Name" :disabled="true" />
            <Input class="small" value="Allison" label="Last Name" :disabled="true" />
            <Input
              class="small"
              value="Singapore Challenges the Idea That Democracy Is the Best Form of Governance"
              label="Title"
              :disabled="true"
            />
            <Input class="small" value="HuffPost" label="Publisher" :disabled="true" />
            <Input value="05 Aug. 2015" label="Date" :disabled="true" />
            <Input
              value="https://www.huffingtonpost.com/graham-allison/singapore-challenges-democracy_b_7933188.html"
              label="Source"
              :disabled="true"
            />
            <button class="button">Add</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="grid container large">
        <div class="grid-box small left texture texture--lines" style="background-color:#00d1b2">
          <div class="form">
            <h1 class="form-title">Autocite Website or Book</h1>
            <Input
              value="https://www.vox.com/culture/2017/6/26/15856668/harry-potter-20th-anniversary-explained"
              label="URL"
              :disabled="true"
            />
            <Input value="133821666X" label="ISBN" :disabled="true" />
            <Input
              value="https://nypost.com/2018/05/19/j-k-rowling-trolls-trump-over-royal-wedding-crowd/"
              label="URL"
              :disabled="true"
            />
            <a class="button button-green" @click.prevent>+ Add More</a>
            <button class="button" @click.prevent>Go</button>
          </div>
        </div>
        <div class="grid-box">
          <h2>Multiple Citations In One Go</h2>
          <p>If you want, you can create citations individually, or you can create multiple citations (up to 7) in one go.</p>
          <p>This helps save time and minimises effort.</p>
          <p>The multiple citations can also be a mixture of both websites and books.</p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="grid container large">
        <div class="grid-box">
          <h2>Alphabetically Sorted Bibliographies</h2>
          <p
            class="para"
          >All citations are automatically sorted alphabetically according to their citation style's standards.</p>
          <p>The 'Export Mode' can be used to easily copy paste the whole bibliography into your written work.</p>
        </div>
        <div
          class="grid-box img small right"
          style="background-image:url(/static/media/about/sort.png);"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input";

export default {
  name: "About",
  components: {
    Input
  }
};
</script>

<style lang="scss" scoped>
.grid {
  min-height: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  .grid-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-position: center;
    background-size: cover;
    padding: 50px;
  }
}
.section > .img {
  max-width: 1152px;
  max-height: 605px;
  height: 42vw;
  width: 80vw;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  margin: 0 auto;
  padding: 50px 0;
}
.interface {
  background-image: url("/static/media/about/qb.png");
}
// .dark .interface {
//     background-image: url("/static/media/about/interface_dark.png");
// }
.section .big_menu > h1 {
  font-size: 35px;
}
.section .form {
  position: relative;
}
@media only screen and (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
    .grid-box {
      min-height: 252px;
      padding: 0;
    }
  }
}
@media screen and (orientation: portrait) {
  .section > .img {
    width: 100vw;
    height: 52.5vw;
  }
}
</style>
