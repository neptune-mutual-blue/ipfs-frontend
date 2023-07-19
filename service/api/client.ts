import { Api } from "../../types/enum";
import { WEBSITE_ORIGIN } from "./constants";

const resources: ApiResource[] = [
  // [Api.Media, "api/media?limit=1000"],
  [Api.Policy, "cache/pages.json"],
  [Api.Video, "cache/videos.json"],
];

const getAllData = async (): Promise<{
  policies: ApiResult<any> | null;
  videos: ApiResult<any> | null;
}> => {
  try {
    const promises: Promise<Response>[] = [];
    resources.map((resource) => {
      const [, path, fqu] = resource;

      // fully qualified uri
      const url = fqu ? path : `${WEBSITE_ORIGIN}/${path}`;
      promises.push(fetch(url));
    });

    try {
    } catch (e) {}
    const responses = await Promise.all(promises);
    const [policies, videos] = await Promise.all(
      responses.map((res) => res.json())
    );

    return {
      policies: {
        ...policies,
        docs: policies.docs.slice(0, 4),
      },
      videos: {
        ...videos,
        docs: videos.docs.slice(0, 4),
      },
    };
  } catch (err) {
    console.error(
      `Error in fetching json from "https://neptunemutual.com": \n${err}\n`
    );
  }

  return {
    policies: null,
    videos: null,
  };
};

export { getAllData };
