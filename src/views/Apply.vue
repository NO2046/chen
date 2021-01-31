<template>
  <div class="page2">
    <div class="content">
      <div class="formWrap">
        <!-- <div class="inputItem">
          <input :placeholder="$t('a1')" type="text" />
        </div>
        <div class="inputItem">
          <input :placeholder="$t('a2')" type="text" />
        </div>
        <div class="inputItem">
          <input :placeholder="$t('a3')" type="text" />
        </div>
        <div class="inputItem">
          <input :placeholder="$t('a4')" type="text" />
        </div>
        <div class="inputItem">
          <input :placeholder="$t('a5')" type="text" />
        </div>
        <div class="inputItem">
          <input :placeholder="$t('a6')" type="text" />
        </div>
        <div class="inputItem">
          <input :placeholder="$t('a7')" type="text" />
        </div> -->

        <Form ref="formInline" :model="formInline" inline style="width:100%;">
          <FormItem prop="name" style="width:100%;">
            <Input type="text" v-model="formInline.name" :placeholder="$t('a1')" style="width:100%;"> </Input>
          </FormItem>
          <FormItem prop="name" style="width:100%;">
            <Input type="text" v-model="formInline.name" :placeholder="$t('a2')" style="width:100%;"> </Input>
          </FormItem>
          <FormItem prop="name" style="width:100%;">
            <Input type="text" v-model="formInline.name" :placeholder="$t('a3')" style="width:100%;"> </Input>
          </FormItem>
          <FormItem prop="name" style="width:100%;">
            <Input type="text" v-model="formInline.name" :placeholder="$t('a4')" style="width:100%;"> </Input>
          </FormItem>
          <FormItem prop="name" style="width:100%;">
            <Input type="text" v-model="formInline.name" :placeholder="$t('a5')" style="width:100%;"> </Input>
          </FormItem>
          <FormItem prop="name" style="width:100%;">
            <Input type="text" v-model="formInline.name" :placeholder="$t('a6')" style="width:100%;"> </Input>
          </FormItem>
          <FormItem prop="name" style="width:100%;">
            <Input type="text" v-model="formInline.name" :placeholder="$t('a7')" style="width:100%;"> </Input>
          </FormItem>
        </Form>
        <div style="text-align:center;">
          <div class="btn">
            {{ $t("a8") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Apply",
  data() {
    return {
      formInline: {
        name: "",
        password: "123",
      },
      ruleInline: {
        phone: [
          { required: true, message: this.$t("p11"), trigger: "change" },
          { type: "string", min: 10, message: this.$t("p11"), trigger: "change" },
        ],
        password: [
          { required: true, message: this.$t("p22"), trigger: "change" },
          // { type: "string", min: 6, message: "The password length cannot be less than 6 bits", trigger: "blur" },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.page2 {
  min-height: 100vh;
  background: url("../assets/2.png") no-repeat;
  background-size: cover;
  position: relative;
  .content {
    width: 90%;
    margin: 0 auto;
    position: relative;
    min-height: 100vh;
  }

  .formWrap {
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    padding: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  .inputItem {
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    font-size: 14px;
    line-height: 1.429;
    background-color: #fff;
    position: relative;

    margin: 0 auto;
    margin-bottom: 16px;
    border-radius: 2px;
  }

  // input {
  //   display: block;
  //   -webkit-box-flex: 1;
  //   -webkit-flex: 1;
  //   flex: 1;
  //   width: 100%;
  //   min-width: 0;
  //   padding: 8px;
  //   box-sizing: border-box;
  //   color: #666;
  //   line-height: inherit;
  //   background-color: inherit;
  //   border-radius: 4px;
  //   outline: none;
  //   border: none;
  // }
  // input:focus {
  //   border-color: #fc9153;
  // }

  .btns {
    width: 80%;
    margin: 12px auto;
  }
  .btn {
    position: relative;
    display: inline-flex;
    box-sizing: border-box;
    height: 44px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.2;
    text-align: center;
    // border-radius: 2px;
    cursor: pointer;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
    -webkit-appearance: none;

    background-color: #ff976a;
    border: 1px solid #ff976a;

    border-radius: 999px;

    width: 120px;
    justify-content: center;
    align-items: center;
  }
  .info {
    font-size: 14px;
    text-align: center;
  }
  .info2 {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    text-align: center;
    width: 100%;
  }
}
</style>
