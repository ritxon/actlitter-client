import React, { Component } from "react";
import "./impact.css";

export class impact_human_animal extends Component {
  render() {
    return (
      <div>
        {/* current place */}
        <div className="impact_fake_navigation">
          <p>
            <a href="/">&emsp; Home &ensp;</a>/ &ensp;
            <a href="/impact">Litter Info &ensp;</a>/ &ensp; Impact on Human &
            Animals
          </p>
        </div>

        {/* left top menu */}
        <div>
        <div className="impact_menu">
          <p><a href="#human_title">Litter Impact on Human & Animals</a></p>
          <hr></hr>
          <p><a href="#human_id">Litter Impact on human</a></p>
          <hr></hr>
          <p><a href="#animal_id">Impact on animals</a></p>
          <hr></hr>
        </div>

        {/* Article */}
        <div className="impact_details">

          <div id="human_title" className="impact_jump"></div>
          <div className="impact_article_flex">
              <div className="impact_article_container w">
                <div  className="impact_article_title">
                  <h1> Litter Impact on Human and Animals</h1>
                </div>
                {/* body */}
                <div className="clear_float"></div>
                <div className="impact_article_body">

                <div id="human_id" className="impact_jump"></div>
                  <h4>Litter Impact on human</h4>
                  <div className="impact_article_right">
                    <div className="impact_img_div">
                      <img
                        src="../../images/impact/impact_animals_1.jpg"
                        className="impact_img"
                      />
                    </div>
                  </div>
                  <p className="impact_article_left">
                    Litter can be hazardous to the health of people if it is not
                    properly disposed of. Litter may carry germs that spread
                    diseases such as cholera and typhoid if it gets into water
                    sources or is carried home by pets. Litter items made of metal
                    and glass can be fatal too. Broken glass and metal cans can be
                    sharp and can cut skin on contact. This can cause injuries
                    leading to skin infections like tetanus.
                  </p>
                  <p className="impact_article_left">
                    Microplastics are another major problem caused by littering.
                    Microplastics consists of plastic debris that has degraded into
                    smaller, minute pieces over the years. Researchers have detected
                    microplastics to be everywhere: air, soils, rivers as well as
                    oceans. They can be found in bottled or tap water, seafood,
                    processed food etc. Moreover, research found that an average
                    person ingests more than 50000 particles of microplastic in a
                    year. Ingesting microplastics could expose people to harmful
                    chemicals found in some plastics. This can cause various health
                    problems like obesity, stunted growth in children, organ
                    problems, reproductive harm etc.
                  </p>
                </div>

                <div className="clear_float"></div>
                <div className="impact_article_body">

                <div id="animal_id" className="impact_jump"></div>
                  <h4> Impact on animals</h4>
                  <div className="impact_article_right">
                    <div className="impact_img_div">
                      <img
                        src="../../images/impact/impact_animals_3.jpg"
                        className="impact_img"
                      />
                    </div>
                  </div>
                  <p className="impact_article_left">
                    Littering can also cause damage to the health of Australian
                    wildlife. Various types of marine litter like plastic bags,
                    glass and plastic bottles, balloons, pieces of rubber, metal
                    cans, fishing gear etc can injure or kill marine life if they
                    ingest it or get entangled in it. Plastic bags can be hazardous
                    to turtles as these clear floating bags resemble their primary
                    food jellyfish and are consequently ingested by them. This can
                    cause suffocation and lead to death. Seabirds mistake litter
                    like strings and balloons as food and consequently ingest it.
                    Some analyses suggest that 95% of seabird species would have
                    ingested plastic by 2050 due to the accelerated increase of
                    plastic production. There have also been cases in Victoria where
                    common and bottlenose dolphins were found to have ingested
                    fishing hooks.
                  </p>

                  <p className="impact_article_left">
                    Moreover, research shows that around 15 million tons of
                    microplastics can be found on the ocean floor. This is due to
                    plastic pollution in the ocean that deteriorates into
                    microplastics. Various marine animals are often victims of
                    microplastic ingestion as they cannot distinguish between
                    microplastics and their food sources. Microplastics can cause
                    harm to them if ingested in large volumes.
                  </p>
                  {/* <div className="impact_article_right">
                    <div className="impact_img_div">
                      <img
                        src="../../images/impact/impact_animals_2.jpg"
                        className="impact_img"
                      />
                    </div>
                  </div> */}

                  <p className="impact_article_left">
                    Entanglement is another major problem caused by marine litter
                    like derelict fishing gear and fishing nets that are discarded
                    in the ocean. This gear is highly dangerous to many marine
                    animals in Australia like whales, sharks, rays, dolphins, seals,
                    turtles, seabirds etc. These animals can get entangled in these
                    fishing nets and can drown or die due to suffocation or
                    starvation. Moreover, these nets can also cause severe injuries
                    to their body parts. Some entanglement cases of seals, stingrays
                    and leatherback turtles have been recorded in Victoria.
                  </p>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clear_float"></div>
      </div>
    );
  }
}

export default impact_human_animal;
