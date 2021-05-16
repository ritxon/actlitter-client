import React, { Component } from "react";
import "./impact.css";
import ".././App.css";

export class impact_human_animal extends Component {
  render() {
    return (
      <body className="impact_body_html">
        <div className="impact_1">
        {/* current place */}
        <div className="impact_fake_navigation">
          <p>
            <a href="/">&emsp; Home &ensp;</a>/ &ensp;
            <a href="/impact">Litter Info &ensp;</a>/ &ensp; Impact on Human &
            Animals
          </p>
        </div>

        {/* left top menu */}
          <div className="impact_menu">
            <p><a href="#human_title">Impact on Humans and Animals</a></p>
            <hr></hr>
            <p><a href="#human_id">Impact on humans</a></p>
            <hr></hr>
            <p><a href="#animal_id">Ingestion by animals</a></p>
            <hr></hr>
            <p><a href="#animal_id2">Animal entanglement</a></p>
            <hr></hr>
            <p><a href="#animal_id3">Impact of microplastic on animals</a></p>
            <hr></hr>
          </div>
</div>
          {/* Article */}
          <div className="impact_details">

            <div id="human_title" className="impact_jump"></div>
            <div className="impact_article_flex">
              <div className="impact_article_container contain1140">
                <div className="impact_article_title">
                  <h1>Impact on Humans and Animals</h1>
                </div>

                <div className="impact_video_div">
                <iframe className="impact_video" src="https://www.youtube.com/embed/IB-y_SYQYOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="impact_article_body">
                  <div className="impact_article_right">
                    <div className="impact_img_div">
                      <img
                        src="../../images/impact/impact_animals_1.jpg"
                        className="impact_img"
                      />
                    </div>
                  </div>
                  <p className="impact_article_left">
                    Litter can have an adverse impact on the health of humans and animals. Inefficient litter disposal can create unhygienic living conditions, block sewage systems and spread diseases. Australian wildlife can ingest or get entangled in litter. This can be injurious to their health causing suffocation, drowning or maiming. Microplastics are another major problem caused by littering. Microplastics are plastic debris that has degraded into smaller, minute pieces over the years that can cause ingestion problems to humans and wildlife alike.
                </p>
                </div>

                {/* body */}
                {/* 1 */}
                <div className="clear_float"></div>
                <div className="impact_article_body">

                  <div id="human_id" className="impact_jump"></div>
                  <h4>Impact on humans</h4>
                  <div className="impact_article_right">
                    <div className="impact_img_div">
                      <img
                        src="../../images/impact/Impact_on_Humans.jpg"
                        className="impact_img"
                      />
                    </div>
                  </div>
                  <p className="impact_article_left">
                    Litter can be hazardous to the health of people if it is not properly disposed of. Litter may carry germs that spread diseases such as cholera and typhoid if it gets into water sources or is carried home by pets. Litter items made of metal and glass can be fatal too. Broken glass and metal cans can be sharp and can cut skin on contact. This can cause injuries leading to skin infections like tetanus.
                  </p>
                  <p className="impact_article_left">
                    Moreover, the increasing amount of plastic litter in water bodies can result in large amounts of microplastic. Due to this, microplastic can be found in drinking water, seafood, processed food etc. Research found that an average person ingests more than 50000 particles of microplastic in a year. Ingesting microplastics could expose people to harmful chemicals found in some plastics. This can cause various health problems like obesity, stunted growth in children, organ problems, reproductive harm etc.
                  </p>
                </div>
                {/* 2 */}
                <div className="clear_float"></div>
                <div className="impact_article_body">

                  <div id="animal_id" className="impact_jump"></div>
                  <h4> Ingestion by animals</h4>
                  <div className="impact_article_right">
                    <div className="impact_img_div">
                      <img
                        src="../../images/impact/Ingestionbyanimals1.jpg"
                        className="impact_img"
                      />
                    </div>
                  </div>
                  <p className="impact_article_left">
                  Various types of marine litter like plastic bags, glass and plastic bottles, balloons, pieces of rubber, metal, fishing gear etc can injure or kill marine life if they ingest it. Plastic bags can be hazardous to turtles as these clear floating bags resemble their primary food jellyfish and are consequently ingested by them. This can cause suffocation and lead to death. Seabirds mistake litter like plastic scraps, strings and balloons as food and consequently ingest it. There have also been cases in Victoria where common and bottlenose dolphins were found to have ingested fishing hooks.
                  </p>
                </div>
                {/* 3 */}
                <div className="clear_float"></div>
                <div className="impact_article_body">

                  <div id="animal_id2" className="impact_jump"></div>
                  <h4> Animal entanglement</h4>
                  <div className="impact_article_right">
                    <div className="impact_img_div">
                      <img
                        src="../../images/impact/Animalentanglement1.jpg"
                        className="impact_img"
                      />
                    </div>
                  </div>
                  <p className="impact_article_left">
                    Entanglement is a major problem caused by marine litter like derelict fishing gear and fishing nets that are discarded in the ocean. This gear is highly dangerous to many marine animals in Australia like whales, sharks, rays, dolphins, seals, turtles, seabirds etc. These animals can get entangled in these fishing nets and can drown or die due to suffocation or starvation. Moreover, these nets can also cause severe injuries to their body parts. Some entanglement cases of seals, stingrays and leatherback turtles have been recorded in Victoria.
                  </p>
                </div>
                {/* 4 */}
                <div className="clear_float"></div>
                <div className="impact_article_body">

                  <div id="animal_id3" className="impact_jump"></div>
                  <h4> Impact of microplastic on animals</h4>
                  <div className="impact_article_right">
                    <div className="impact_img_div">
                      <img
                        src="../../images/impact/Impactofmicroplasticonanimals.jpg"
                        className="impact_img"
                      />
                    </div>
                  </div>
                  <p className="impact_article_left">
                  Moreover, research shows that around 15 million tons of microplastics can be found on the ocean floor. This is due to plastic pollution in the ocean that deteriorates into microplastics. Various marine animals like whales, turtles and seabirds are often victims of microplastic ingestion as they cannot distinguish between microplastics and their food sources. Microplastics can cause harm to them if ingested in large volumes.
                  </p>
                </div>
              </div>
          </div>
        </div>

        <div className="clear_float"></div>
      </body>
    );
  }
}

export default impact_human_animal;
