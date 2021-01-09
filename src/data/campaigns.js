import {
  amphan,
  coronaWarrior,
  covid19FoodDistribution,
  covid19RationKit,
  independanceDay,
  newClothesDistribution,
  tribute,
  winterClothesDistribution,
} from "../data/gallery";

const generateRandomThumbnail = (imagesFolder) => {
  let imageUrl = "";
  imageUrl = imagesFolder[Math.floor(Math.random() * imagesFolder.length)];
  return imageUrl;
};

const campaigns = [
  {
    Name: "Covid 19 Food Distribution",
    Images: covid19FoodDistribution,
    Thumbnail: generateRandomThumbnail(covid19FoodDistribution),
    Caption: `Glimpse of our FoodForAll Drive, which took place regularly during the lockdown. Our team members distributed 
      food in different areas of Asansol on regular basis so that no one sleeps hungry. We have fed over 200+ people daily on 
      regular basis, during the lockdown and post lockdown. Our heartfelt Thanks to everyone who donated and for connecting with 
      us and helping us in this initiative. ❤`,
  },
  {
    Name: "Covid 19 Ration Kit",
    Images: covid19RationKit,
    Thumbnail: generateRandomThumbnail(covid19RationKit),
    Caption: `Our team in Asansol and Durgapur distributed ration kits to over 300+ families residing in Asansol Durgapur region. 
      Our constant efforts in providing aid to those in need, in those trying times have proved to be helpful.We would like to 
      thank all the people who have stood by us in support of this initiative, we hope that you'll continue to do the same. We 
      urge others to  come up in support and BE THEIR SAHYOG .❤`,
  },
  {
    Name: "Corona Warrior",
    Images: coronaWarrior,
    Thumbnail: generateRandomThumbnail(coronaWarrior),
    Caption: `We remember the day vividly, when Sahyog was just an idea, when we thought this wasn't achievable, up until today, 
      TODAY(18-07-2020) is the DAY when our hardwork has paid off, the DAY when we have REAPED what we SOWED.The DAY we realised, 
      we have the potential to be the CATALYST for a greater good. We heartily thank all the contributors, who have stood beside 
      us and helped us reach this milestone. We thank INDIAN HUMAN RIGHTS ORGANIZATION for felicitating our efforts.`,
  },
  {
    Name: "Amphan Relief Camp collaboration with Swarnotori NGO",
    Images: amphan,
    Thumbnail: generateRandomThumbnail(amphan),
    Caption: `The horrifying cyclone Amphan has wreaked havoc all across West Bengal. Numerous people have been affected by it. 
      A catastrophe of this scale has never been witnessed before. Each one of us must come forward and work shoulder to shoulder 
      to save the state from this situation. With the aim to rise We Team Sahyog donated few basic necessities for helping the 
      victims and for the upliftment of the society.Special thanks to Asansol Swarnotori NGO Welfare Society to organise AMPHAN 
      RELIEF CAMPAIGN. Keep supporting We will keep helping!`,
  },
  {
    Name: "Independance Day",
    Images: independanceDay,
    Thumbnail: generateRandomThumbnail(independanceDay),
    Caption: `Self-reliant, self-supporting, self-sufficient, yet compassionate, that is the India of our dreams, that is what 
      we aim at Sahyog. Let's pledge and make it happen on this Independence Day! Few glimpses of rejoice and celebration with our 
      less fortunate friends, with more than 500 food packets distributed at Cheshire Home (Burnpur), Prantik Old Age Home 
      (Surjanagar) & Asansol Railway Station.`,
  },
  {
    Name: "Tribute to our martyred soldiers",
    Images: tribute,
    Thumbnail: generateRandomThumbnail(tribute),
    Caption: `SAHYOG paid tribute to 20 Indian Army bravehearts martyred in a face-off with China along the Line of Actual 
      Control in eastern Ladakh. 🙏`,
  },
  {
    Name: "New Clothes Distribution",
    Images: newClothesDistribution,
    Thumbnail: generateRandomThumbnail(newClothesDistribution),
    Caption: `Seeing the winter chill and dip in temperatures the members of Asansol Sahyog Welfare Organisation, led by our 
      campaign leaders Mr. R K Kundu and Mr. S Chatterjee clothes were provided to the underprivileged.On the occasion of Durga 
      Puja Mr. S Chatterjee and Mr. R K Kundu said, it’s a small contribution in the life of the poor and underprivileged and would 
      continue to do the same so that people don’t die of cold.Wishing everyone Subho Bijaya.`,
  },
  {
    Name: "Winter Clothes Distribution",
    Images: winterClothesDistribution,
    Thumbnail: generateRandomThumbnail(winterClothesDistribution),
    Caption: `On the one hand where winter is welcomed by the privileged wealthy people with colorful pashminas and festive moods 
      forbye, it brings a lot of suffering to the impoverished of our country. Quite sadly, many of the poor can't afford to buy 
      warm clothes for winter. In this scenario, children tend to suffer the most. Keeping them in mind, Sahyog took the initiative 
      to put a smile on their face. A campaign was run at Karanjora Village of Bankura on 15th December, where Members of Sahyog 
      donated new winter clothes and any amount of money they could generously give for this noble cause, thereby adding some 
      positivity to arguably the 'Worst Year Ever?'`,
  },
];

export default campaigns;
