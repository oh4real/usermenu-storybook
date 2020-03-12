import { shallowMount } from "@vue/test-utils";
import KUserMenu from "@/components/KUserMenu.vue";

describe("KUserMenu.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(KUserMenu, {
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
