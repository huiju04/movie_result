import { nowPlaying, popular, topRated, upComing } from "../../api";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import "swiper/css";
import { ShowMovie } from "./ShowMovie";
import { Loading } from "../../components/Logding";
import { Layout } from "../../components/Layout";

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowPlayingData(nowResults);

        const { results: popResults } = await popular();
        setPopData(popResults);

        const { results: topResults } = await topRated();
        setTopData(topResults);

        const { results: upResults } = await upComing();
        setUpData(upResults);

        setIsLoading(false);
      } catch (error) {
        console.log("에러:" + error);
      }
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <Banner data={nowPlayingData[0]} />

              <Layout>
                <ShowMovie
                  titleName={"현재 상영 영화"}
                  movieData={nowPlayingData}
                />
                <ShowMovie titleName={"개봉 예정 영화"} movieData={upData} />
                <ShowMovie titleName={"인기 영화"} movieData={popData} />

                <ShowMovie titleName={"평점이 높은"} movieData={topData} />
              </Layout>
            </>
          )}
        </div>
      )}
    </>
  );
};
