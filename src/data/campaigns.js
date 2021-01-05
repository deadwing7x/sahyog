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
  },
  {
    Name: "Covid 19 Ration Kit",
    Images: covid19RationKit,
    Thumbnail: generateRandomThumbnail(covid19RationKit),
  },
  {
    Name: "Corona Warrior",
    Images: coronaWarrior,
    Thumbnail: generateRandomThumbnail(coronaWarrior),
  },
  {
    Name: "Amphan Relief Camp collaboration with Swarnotori NGO",
    Images: amphan,
    Thumbnail: generateRandomThumbnail(amphan),
  },
  {
    Name: "Independance Day",
    Images: independanceDay,
    Thumbnail: generateRandomThumbnail(independanceDay),
  },
  {
    Name: "Tribute to our martyred soldeirs",
    Images: tribute,
    Thumbnail: generateRandomThumbnail(tribute),
  },
  {
    Name: "New Clothes Distribution",
    Images: newClothesDistribution,
    Thumbnail: generateRandomThumbnail(newClothesDistribution),
  },
  {
    Name: "Winter Clothes Distribution",
    Images: winterClothesDistribution,
    Thumbnail: generateRandomThumbnail(winterClothesDistribution),
  },
];

export default campaigns;
