import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {

  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  block.textContent = '';
  const footer = document.createElement('div');

  while (fragment.firstElementChild) {
    footer.append(fragment.firstElementChild);
  }

  block.append(footer);

  /* -------- FIX FOLLOW US + ICON ALIGNMENT -------- */

  const sections = block.querySelectorAll('.section');

  const followSection = sections[2]; // FOLLOW US
  const iconSection = sections[3];   // icons

  if (followSection && iconSection) {
    const wrapper = document.createElement('div');
    wrapper.className = 'social-wrapper';

    wrapper.append(followSection.firstElementChild);
    wrapper.append(iconSection.firstElementChild);

    followSection.append(wrapper);
    iconSection.remove();
  }

}