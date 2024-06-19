import React, { useRef } from "react";
import { styles } from "../styles";
import { motion, useTransform, useScroll } from "framer-motion";
import { instagram, linkedin, mohit, astha } from "../assets/index";
import { SectionWrapper } from "../hoc";
import { useMediaQuery } from "react-responsive";

const Card1 = () => {
  return (
    <div className="relative h-[516px] w-[1265px] flex flex-row justify-between">
      <div className={`${styles.sectionHeadText} flex flex-col`}>
        <span>What is </span>
        <span>Mohit Mokal Mediation?</span>
      </div>
      <div
        className={`${styles.sectionSubText} w-[650px] flex flex-col gap-5 text-justify`}
      >
        <span>
          Mohit Mokal Mediation is a private consulting services for civil and
          commercial cases by out-of-court dispute resolution mechanism. We
          specialise in Negotiation, Mediation, and Arbitration.
        </span>
        <span>
          Our Negotiation and Mediation Training Program is tailored to students
          and young professionals providing them with the essential tools and
          techniques for navigating complex negotiation and mediation. Our
          specialised Negotiation and Mediation Case Management Training offers
          advanced strategies and insights to handle even the most challenging
          cases with confidence.
        </span>
        <span>
          Mohit Mokal has trained 1000+ students and successfully concluded
          several Training Programs both virtual and in-person with leading
          universities in India including National Law University Odisha, NALSAR
          University of Law, Maharashtra National Law University, Mumbai, and
          more. We also have strategic partnerships with esteemed Universities
          like R.V University, Bangalore to promote negotiation and mediation
          amongst students and professionals.
        </span>
      </div>
    </div>
  );
};
const Card2 = () => {
  return (
    <div className="h-[516px] w-[1265px] flex flex-row text-center justify-between">
      <h1
        className={`${styles.sectionHeadText} w-[325px] h-[84px] mt-20 -ml-16 -rotate-90`}
      >
        Our Team
      </h1>
      <div className="flex flex-row -ml-20 gap-11">
        <div className="flex flex-col items-start justify-between">
          <img
            className="rounded-xl w-[655px] h-[368px] object-cover"
            src={mohit}
          />
          <h1 className="font-jakarta font-semibold text-[41px]">
            Mohit Mokal - Founder
          </h1>
          <div className="flex pt-[20px] flex-row gap-[20px]">
            <a href="https://www.linkedin.com/company/mohit-mokal-mediation/">
              <img src={linkedin} alt="LinkedIn" width="42px" height="42px" />
            </a>
            <a href="https://www.instagram.com/mohitmokalmediation">
              <img src={instagram} alt="Instagram" width="42px" height="42px" />
            </a>
          </div>
        </div>
        <div
          className={`${styles.sectionSubText} w-[650px] flex flex-col gap-5 text-justify`}
        >
          <span>
            Mohit Mokal is an independent dispute resolution and technology
            consultant. He started his own practice, Mohit Mokal Mediation in
            April 2023. Before that he worked as a Senior Associate, Mediation
            at CAMP, and started his journey with Senior Advocate and Mediator
            Mr. Sriram Panchu where he assisted in cases such as the Ayodhya
            Babri Masjid Mediation for the Supreme Court of India and the Luthra
            and Saraf Partnership Dispute Mediation before the Delhi High Court
            amongst others.
          </span>
          <span>
            He has also assisted the Bar Council of India in drafting the course
            manual for teaching Mediation at all law schools as a mandatory
            subject. Currently he provides Mediation services over a range of
            cases including civil, commercial, property and real estate,
            employment, and start-up related disputes.
          </span>
        </div>
      </div>
    </div>
  );
};
const Card3 = () => {
  return (
    <div className="h-[516px] w-[1265px] flex flex-row justify-between">
      <div
        className={`${styles.sectionSubText} w-1/2 px-5 flex flex-col gap-5 text-justify`}
      >
        <span>
          Mohit is qualified and trained as an advocate and mediator recognised
          by IMI, SIMI, ADR ODR UK, and CMC since 2019. He graduated from OP
          Jindal Global University and holds a master’s degree in international
          Dispute Resolution from Queen Mary, University of London.
        </span>
        <span>
          He has published papers on a Critical Analysis of the Mediation Bill
          and on Enabling Mediation and ODR in India and is a contributor in the
          books Mediation Practice and Law, third edition published by Lexis
          Nexis authored by Mr. Sriram Panchu, and Mediation Policy and
          Practice, first edition published by OakBridge authored by Ms. Chitra
          Narayan.
        </span>
        <span>
          Mohit has participated as a student, coach, and judge in over 70
          Mediation & Negotiation competitions including several
        </span>
      </div>
      <div
        className={`${styles.sectionSubText} w-1/2 px-5 flex flex-col text-justify`}
      >
        <span>
          prestigious international competitions such as ICC Paris, ICC
          Australia, ICC Hong Kong, The International Negotiation Competition,
          ELSA, ALSA and CDRC Vienna many more. He currently provides coaching
          and formal training in Negotiation and Mediation to students both
          privately and through university partnerships.
        </span>
      </div>
    </div>
  );
};
const Card4 = () => {
  return (
    <div className="h-[516px] w-[1265px] flex flex-row justify-between">
      <div className="">
        <img
          className="rounded-xl w-[655px] h-[368px] object-cover"
          src={astha}
        />
        <h1 className="font-jakarta font-semibold text-[38px]">
          Astha Kothari - Training Coordinator
        </h1>
        <div className="flex pt-[20px] flex-row gap-[20px]">
          <a href="https://www.linkedin.com/in/asthakothari02">
            <img src={linkedin} alt="LinkedIn" width="42px" height="42px" />
          </a>
        </div>
      </div>
      <div
        className={`${styles.sectionSubText} w-1/2 px-5 flex flex-col gap-5`}
      >
        <span>
          Astha Kothari is a third-year law student at Department of Law,
          University of Calcutta. Astha has been working with Mohit Mokal
          Mediation as an intern since May, 2023 and as a Training Coordinator
          since July, 2023 where she has been coordinating various online and
          offline trainings. She has also interned under CAMP and KD Lex
          chambers to enhance her Mediation skills.
        </span>
      </div>
    </div>
  );
};

const About = () => {
  const isMediumOrLarger = useMediaQuery({ query: "(min-width: 768px)" });

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef.current, // Use targetRef.current instead of targetRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);

  return (
    <div>
      {isMediumOrLarger ? (
        <section ref={targetRef.current} className="relative h-[500vh]">
          <div className="sticky top-[100px] h-screen flex item-center overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex gap-4 bg-[#BAE0EB3D] bg-opacity-24 py-[200px] pl-[150vh] pr-[150vh]"
            >
              <Card1 />
              <Card2 />
              <Card3 />
              <Card4 />
            </motion.div>
          </div>
        </section>
      ) : (
        <div className="AboutForSmall font-jakarta p-[25px] bg-[#BAE0EB] bg-opacity-25">
          <div className="aboutComp">
            <div className={`${styles.sectionHeadText} flex flex-col`}>
              <span>What is </span>
              <span>Mohit Mokal Mediation?</span>
            </div>
            <div
              className={`${styles.sectionSubText} flex flex-col mt-[25px] gap-[25px] text-justify`}
            >
              <span>
                Mohit Mokal Mediation is a private consulting services for civil
                and commercial cases by out-of-court dispute resolution
                mechanism. We specialise in Negotiation, Mediation, and
                Arbitration.
              </span>
              <span>
                Our Negotiation and Mediation Training Program is tailored to
                students and young professionals providing them with the
                essential tools and techniques for navigating complex
                negotiation and mediation. Our specialised Negotiation and
                Mediation Case Management Training offers advanced strategies
                and insights to handle even the most challenging cases with
                confidence.
              </span>
              <span>
                Mohit Mokal has trained 1000+ students and successfully
                concluded several Training Programs both virtual and in-person
                with leading universities in India including National Law
                University Odisha, NALSAR University of Law, Maharashtra
                National Law University, Mumbai, and more. We also have
                strategic partnerships with esteemed Universities like R.V
                University, Bangalore to promote negotiation and mediation
                amongst students and professionals.
              </span>
            </div>
          </div>
          <div className="aboutComp">
            <h1 className={`${styles.sectionHeadText} pt-[51px] mb-[29px]`}>
              Our Team
            </h1>
            <div className="">
              <img className="rounded-xl" src={mohit} />
              <h1 className="font-jakarta py-[11px] font-semibold text-[21px]">
                Mohit Mokal - Founder
              </h1>
              <div className="flex flex-row gap-[20px]">
                <a href="https://www.linkedin.com/company/mohit-mokal-mediation/">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    width="30px"
                  />
                </a>
                <a href="https://www.instagram.com/mohitmokalmediation">
                  <img
                    src={instagram}
                    alt="Instagram"
                    width="30px"
                  />
                </a>
              </div>
            </div>
            <div
              className={`${styles.sectionSubText} py-5 flex flex-col gap-5 text-justify`}
            >
              <span>
                Mohit Mokal is an independent dispute resolution and technology
                consultant. He started his own practice, Mohit Mokal Mediation
                in April 2023. Before that he worked as a Senior Associate,
                Mediation at CAMP, and started his journey with Senior Advocate
                and Mediator Mr. Sriram Panchu where he assisted in cases such
                as the Ayodhya Babri Masjid Mediation for the Supreme Court of
                India and the Luthra and Saraf Partnership Dispute Mediation
                before the Delhi High Court amongst others.
              </span>
              <span>
                He has also assisted the Bar Council of India in drafting the
                course manual for teaching Mediation at all law schools as a
                mandatory subject. Currently he provides Mediation services over
                a range of cases including civil, commercial, property and real
                estate, employment, and start-up related disputes.
              </span>
            </div>
          </div>
          <div className="aboutComp">
            <div
              className={`${styles.sectionSubText} -mt-5 py-5 flex flex-col gap-5 text-justify`}
            >
              <span>
                Mohit is qualified and trained as an advocate and mediator
                recognised by IMI, SIMI, ADR ODR UK, and CMC since 2019. He
                graduated from OP Jindal Global University and holds a master’s
                degree in international Dispute Resolution from Queen Mary,
                University of London.
              </span>
              <span>
                He has published papers on a Critical Analysis of the Mediation
                Bill and on Enabling Mediation and ODR in India and is a
                contributor in the books Mediation Practice and Law, third
                edition published by Lexis Nexis authored by Mr. Sriram Panchu,
                and Mediation Policy and Practice, first edition published by
                OakBridge authored by Ms. Chitra Narayan.
              </span>
              <span>
                Mohit has participated as a student, coach, and judge in over 70
                Mediation & Negotiation competitions including several
                prestigious international competitions such as ICC Paris, ICC
                Australia, ICC Hong Kong, The International Negotiation
                Competition, ELSA, ALSA and CDRC Vienna many more. He currently
                provides coaching and formal training in Negotiation and
                Mediation to students both privately and through university
                partnerships.
              </span>
            </div>
          </div>
          <div className="aboutComp pt-[78px]">
            <div className="">
              <img className="rounded-xl" src={astha} />
              <h1 className="font-jakarta py-[11px] font-semibold text-[21px]">
                Astha Kothari - Training Coordinator
              </h1>
              <div className="flex flex-row gap-[20px]">
              <a href="https://www.linkedin.com/in/asthakothari02">
            <img src={linkedin} alt="LinkedIn" width="30px" />
          </a>
              </div>
            </div>
            <div
              className={`${styles.sectionSubText} py-5 flex flex-col gap-5 text-justify`}
            >
              <span>
                Astha Kothari is a third-year law student at Department of Law,
                University of Calcutta. Astha has been working with Mohit Mokal
                Mediation as an intern since May, 2023 and as a Training
                Coordinator since July, 2023 where she has been coordinating
                various online and offline trainings. She has also interned
                under CAMP and KD Lex chambers to enhance her Mediation skills.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(About, "about");
