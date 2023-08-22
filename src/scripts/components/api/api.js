import { WEBSITE_ORIGIN } from "../../../../service/api/constants";
import { createEl } from "../../global/search/dom";
import { updateThemeLinks } from "../../global/theme";
import { policies, videos } from "./fallback-data";

const content = document.querySelector(
  "div.nav.video.section.container > .content"
);
const videoContainer = content.querySelector("button.video.container");

const policiesNav = document.querySelector("footer .nav.container > nav");

async function updateDom() {
  const { policies: p, videos: v } = {}

  const _policies = p || policies;
  const _videos = v || videos;

  _videos.docs.map((video) => {
    const videoButtonElement = videoContainer.cloneNode(true);

    // remove hidden classes
    videoButtonElement.classList.remove("initial", "hidden");

    // set video id
    videoButtonElement.setAttribute("data-video-id", video.videoId);

    // set thumbnail src
    videoButtonElement
      .querySelector("div.thumbnail > img")
      .setAttribute("src", `${WEBSITE_ORIGIN}/cdn/${video.thumbnail.filename}`);

    // set thumbnail alt text
    videoButtonElement
      .querySelector("div.thumbnail > img")
      .setAttribute("alt", `Thumbnail for video titled: "${video.title}"`);

    // set title
    videoButtonElement.querySelector("div.video.content > h3.title").innerText =
      video.title;

    // set description
    videoButtonElement.querySelector(
      "div.video.content > p.supporting.text"
    ).innerText = video.htmlAsText;

    content.append(videoButtonElement);
  });

  const listDiv = createEl({
    appendTo: policiesNav,
    className: "list",
    type: "div",
  });

  createEl({
    appendTo: listDiv,
    type: "h2",
    html: "Policies",
  });

  const listUl = createEl({
    appendTo: listDiv,
    type: "ul",
  });

  _policies.docs.map((policy) => {
    const policyLi = createEl({
      appendTo: listUl,
      type: "li",
    });

    createEl({
      appendTo: policyLi,
      type: "a",
      attributes: [
        { key: "href", value: `${WEBSITE_ORIGIN}/policies/${policy.slug}` }
      ],
      html: policy.title,
    });
  });

  updateThemeLinks();
}

export { updateDom };
