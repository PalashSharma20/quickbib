<template>
  <div>
    <div class="section">
      <div class="container small">
        <div class="big-title">
          <span>
            <h1>Plans &amp; Pricing</h1>
          </span>
        </div>
        <p>
          At the moment, we are
          <b>FREE</b> to use. However, since we are still in the testing phase, users will be randomly given any plan.
        </p>
        <p>In the future, it will be possible to select various plans at different price levels. We will also try to work with institutions to provide their members some premium features free of cost.</p>
      </div>
    </div>
    <div class="container">
      <div class="pricing">
        <div
          v-for="(plan, i) in plans"
          :key="i"
          :class="['price-box', { sel:  $auth.user() && $auth.user().plan == plan.name}]"
        >
          <h1>{{ plan.name }}</h1>
          <p class="price">{{ plan.price }}</p>
          <table>
            <tr>
              <td>
                <b>{{ plan.projects }}</b> Projects
              </td>
            </tr>
            <tr>
              <td>
                <b>{{ plan.citations }}</b> Citations
              </td>
            </tr>
            <tr>
              <td>
                <b>{{ plan.advertisements ? "Some" : "No" }}</b> Advertisements
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pricing",
  data() {
    return {
      plans: [
        {
          name: "Free",
          price: 0,
          projects: 3,
          citations: 100,
          advertisements: false
        },
        {
          name: "Student",
          price: 0,
          projects: 4,
          citations: 150,
          advertisements: false
        },
        {
          name: "Premium",
          price: 0,
          projects: 5,
          citations: 200,
          advertisements: false
        },
        {
          name: "Unlimited",
          price: 0,
          projects: "Unlimited",
          citations: "Unlimited",
          advertisements: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.pricing {
  margin-bottom: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  .price-box {
    background: var(--menu-box-background-color);
    position: relative;
    padding: 40px 0;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    transition: transform 250ms cubic-bezier(0.02, 0.01, 0.47, 1),
      box-shadow 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
    &:hover {
      box-shadow: 0 40px 40px rgba(0, 0, 0, 0.16);
      transform: translate(0, -20px);
    }
    &.sel {
      box-shadow: 0 40px 40px rgba(0, 0, 0, 0.16);
      border-top: 4px solid var(--main-color);
      z-index: 10;
    }
    h1 {
      color: var(--title-sec-color);
      text-align: center;
      margin-bottom: 30px;
      font-size: 25px;
      letter-spacing: 3px;
      font-weight: 400;
      text-transform: uppercase;
    }
    .price {
      display: block;
      font-size: 80px;
      font-weight: 300;
      color: var(--title-color);
      position: relative;
      text-align: center;
      &:before {
        content: "\0024";
        font-size: 20px;
        font-weight: 500;
        color: var(--main-color);
        top: 10px;
        margin-left: -15px;
        position: absolute;
      }
      &:after {
        content: "/MO";
        font-size: 15px;
        font-weight: 500;
        color: var(--title-sec-color);
        position: absolute;
        bottom: 15px;
      }
    }
    table {
      width: 100%;
      td {
        padding: 15px 0;
        text-align: center;
        color: var(--default-text-color);
      }
    }
  }
}
@media only screen and (max-width: 1020px) {
  .pricing {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 600px) {
  .pricing {
    grid-template-columns: repeat(1, 1fr);
    .price-box {
      &.sel {
        box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
      }
      &:hover {
        box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
        transform: none;
      }
    }
  }
}
</style>
