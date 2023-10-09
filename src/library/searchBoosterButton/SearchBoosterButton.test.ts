// src/sum.test.ts
import { expect, describe, it } from 'vitest';
import { mount } from "@vue/test-utils";
import SearchBoosterButton from './SearchBoosterButton.vue';

describe('SearchBoosterButton', () => {
  const wrapper = mount(SearchBoosterButton);
  it('Snapshot', async () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('renders button props title correctly', async () => {
    const buttontitle = 'Кнопка';
    const title = mount(SearchBoosterButton, {
      props: {
        title: buttontitle,
      },
    });
    expect(title.text()).toContain(buttontitle);
  });

  it('emits buttonClick event when button is clicked', async () => {
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('buttonClick')).toBeTruthy();
  });
});