import React from 'react';
import Section from '../templates/Section';
import { HERO_IMG_URL, SUB_IMG_LEFT_URL, SUB_IMG_RIGHT_URL } from "../utility/Constants";

const SubHero = () => {
  return (
    <Section>
    <div className="w-11/12 h-11/12 flex">
      <div className="w-4/12 flex justify-center items-end">
        <img src={SUB_IMG_LEFT_URL} alt="Couple Image" className="h-4/6 " />
      </div>
      <div className="w-4/12 flex flex-col whitespace-nowrap justify-center items-center z-10 ">
        <p className="text-6xl font-bold">Some title to showcase USP </p>
        <p className="text-6xl font-bold"> or anything you like.</p>
        <p className="w-full whitespace-normal mt-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
      <div className="w-4/12 flex justify-center items-start">
        <img src={SUB_IMG_RIGHT_URL} alt="Groom Image" className="h-4/6 " />
      </div>
    </div>
  </Section>
  )
}

export default SubHero