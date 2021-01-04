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
    Thumbnail: generateRandomThumbnail(covid19FoodDistribution),
  },
  {
    Name: "Covid 19 Ration Kit",
    Thumbnail: generateRandomThumbnail(covid19RationKit),
  },
  {
    Name: "Corona Warrior",
    Thumbnail: generateRandomThumbnail(coronaWarrior),
  },
  {
    Name: "Amphan Relief Camp collaboration with Swarnotori NGO",
    Thumbnail: generateRandomThumbnail(amphan),
  },
  {
    Name: "Independance Day",
    Thumbnail: generateRandomThumbnail(independanceDay),
  },
  {
    Name: "Tribute to our martyred soldeirs",
    Thumbnail: generateRandomThumbnail(tribute),
  },
  {
    Name: "New Clothes Distribution",
    Thumbnail: generateRandomThumbnail(newClothesDistribution),
  },
  {
    Name: "Winter Clothes Distribution",
    Thumbnail: generateRandomThumbnail(winterClothesDistribution),
  },
];

export default campaigns;
