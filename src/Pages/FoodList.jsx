import { Flex, Grid, Skeleton, useConst } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import ApiCall from "../Component/Api";
import Filter from "../Component/Filter";
import SkeletonFunc from "../Component/Skeleton";
import {
  LOADING_ACTION,
  SUCCESS_ACTION,
  ADD_ACTION,
  DELETE_ACTION,
} from "../FoodContext/action";
import { FoodContext } from "../FoodContext/FoodContext";
import FoodBox from "./FoodBox";

const data = [
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
    strMeal: "CHOCOLATE GATEAU",
    strCategory: "Dessert",
    price: "376",
    rating: " 2.4",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg",
    strMeal: "CHICKEN ENCHILADA CA...",
    strCategory: "Chicken",
    price: "365",
    rating: " 1.2",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg",
    strMeal: "CREAM CHEESE TART",
    strCategory: "Starter",
    price: "379",
    rating: " 4.5",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/vvusxs1483907034.jpg",
    strMeal: "CHRISTMAS PUDDING FL...",
    strCategory: "Dessert",
    price: "388",
    rating: " 2.6",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    strMeal: "CHICKEN HANDI",
    strCategory: "Chicken",
    price: "395",
    rating: " 2.7",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
    strMeal: "CHICKEN ALFREDO PRIM...",
    strCategory: "Chicken",
    price: "396",
    rating: " 4.2",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
    strMeal: "CHICKEN FAJITA MAC A...",
    strCategory: "Chicken",
    price: "418",
    rating: " 1.5",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
    strMeal: "CAJUN SPICED FISH TA...",
    strCategory: "Seafood",
    price: "419",
    rating: " 2.3",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg",
    strMeal: "CROCK POT CHICKEN BA...",
    strCategory: "Chicken",
    price: "430",
    rating: " 3.2",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg",
    strMeal: "CHICKEN KARAAGE",
    strCategory: "Chicken",
    price: "431",
    rating: " 3.1",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/qstyvs1505931190.jpg",
    strMeal: "COQ AU VIN",
    strCategory: "Chicken",
    price: "432",
    rating: " 3.7",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg",
    strMeal: "CHILLI PRAWN LINGUIN...",
    strCategory: "Pasta",
    price: "439",
    rating: " 4",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/rvtvuw1511190488.jpg",
    strMeal: "CLAM CHOWDER",
    strCategory: "Starter",
    price: "440",
    rating: " 3.8",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg",
    strMeal: "CREAMY TOMATO SOUP",
    strCategory: "Starter",
    price: "441",
    rating: " 4.3",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
    strMeal: "CHICKEN & MUSHROOM H...",
    strCategory: "Chicken",
    price: "446",
    rating: " 3.6",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
    strMeal: "CHICKEN COUSCOUS",
    strCategory: "Chicken",
    price: "450",
    rating: " 4.6",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/uttuxy1511382180.jpg",
    strMeal: "CHOCOLATE AVOCADO MO...",
    strCategory: "Dessert",
    price: "453",
    rating: " 1.4",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg",
    strMeal: "CHOC CHIP PECAN PIE",
    strCategory: "Dessert",
    price: "456",
    rating: " 2.1",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg",
    strMeal: "CHOCOLATE RASPBERRY ...",
    strCategory: "Dessert",
    price: "460",
    rating: " 1.4",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg",
    strMeal: "CHICKPEA FAJITAS",
    strCategory: "Vegetarian",
    price: "470",
    rating: " 1.2",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg",
    strMeal: "CHICKEN HAM AND LEEK...",
    strCategory: "Chicken",
    price: "475",
    rating: " 3.9",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/uwvxpv1511557015.jpg",
    strMeal: "CHICKEN PARMENTIER",
    strCategory: "Chicken",
    price: "479",
    rating: " 1.6",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg",
    strMeal: "CARROT CAKE",
    strCategory: "Dessert",
    price: "497",
    rating: " 1.4",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/vqpwrv1511723001.jpg",
    strMeal: "CHELSEA BUNS",
    strCategory: "Dessert",
    price: "498",
    rating: " 3.7",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg",
    strMeal: "CHOCOLATE SOUFFLE",
    strCategory: "Dessert",
    price: "505",
    rating: " 2.3",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg",
    strMeal: "CHINON APPLE TARTS",
    strCategory: "Dessert",
    price: "510",
    rating: " 3.4",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg",
    strMeal: "CHICKEN MARENGO",
    strCategory: "Chicken",
    price: "520",
    rating: " 1.4",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
    strMeal: "CANADIAN BUTTER TART...",
    strCategory: "Dessert",
    price: "523",
    rating: " 4.2",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg",
    strMeal: "CHICKEN BASQUAISE",
    strCategory: "Chicken",
    price: "534",
    rating: " 2.7",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ussyxw1515364536.jpg",
    strMeal: "CALLALOO JAMAICAN ST...",
    strCategory: "Miscellaneous",
    price: "539",
    rating: " 3.8",
    q: 1,
  },
  {
    strMealThumb: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
    strMeal: "CHICKEN CONGEE",
    strCategory: "Chicken",
    price: "556",
    rating: " 4.5",
    q: 1,
  },
  {
    strMealThumb: "https://www.themealdb.com/images/media/meals/1550442508.jpg",
    strMeal: "CHOCOLATE CARAMEL CR...",
    strCategory: "Dessert",
    price: "566",
    rating: " 1.8",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/gpz67p1560458984.jpg",
    strMeal: "CHAKCHOUKA",
    strCategory: "Miscellaneous",
    price: "569",
    rating: " 1.6",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/t3r3ka1560461972.jpg",
    strMeal: "CASHEW GHORIBA BISCU...",
    strCategory: "Dessert",
    price: "576",
    rating: " 1.4",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    strMeal: "CORBA",
    strCategory: "Side",
    price: "577",
    rating: " 3.1",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg",
    strMeal: "CHRISTMAS PUDDING TR...",
    strCategory: "Dessert",
    price: "589",
    rating: " 4.9",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/1d85821576790598.jpg",
    strMeal: "CLASSIC CHRISTMAS PU...",
    strCategory: "Dessert",
    price: "588",
    rating: " 1.4",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ldnrm91576791881.jpg",
    strMeal: "CHRISTMAS CAKE",
    strCategory: "Dessert",
    price: "590",
    rating: " 1.4",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xb97a81583266727.jpg",
    strMeal: "CORNED BEEF AND CABB...",
    strCategory: "Beef",
    price: "598",
    rating: " 4.2",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/st1ifa1583267248.jpg",
    strMeal: "CRISPY SAUSAGES AND ...",
    strCategory: "Pork",
    price: "599",
    rating: " 2.6",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg",
    strMeal: "CHICKEN QUINOA GREEK...",
    strCategory: "Chicken",
    price: "611",
    rating: " 2.4",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
    strMeal: "CHICK-FIL-A SANDWICH",
    strCategory: "Chicken",
    price: "616",
    rating: " 1.3",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/7vpsfp1608588991.jpg",
    strMeal: "CODDLED PORK WITH CI...",
    strCategory: "Pork",
    price: "637",
    rating: " 4.1",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/vc08jn1628769553.jpg",
    strMeal: "CEVAPI SAUSAGES",
    strCategory: "Beef",
    price: "655",
    rating: " 3.4",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    strMeal: "CROATIAN LAMB PEKA",
    strCategory: "Beef",
    price: "656",
    rating: " 1.3",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/tnwy8m1628770384.jpg",
    strMeal: "CROATIAN BEAN STEW",
    strCategory: "Beef",
    price: "658",
    rating: " 3.7",
    q: 1,
  },
  {
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg",
    strMeal: "CHIVITO URUGUAYO",
    strCategory: "Beef",
    price: "663",
    rating: " 4.9",
    q: 1,
  },
];

export default function FoodList() {
  const { state, dispatch } = useContext(FoodContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // dispatch(LOADING_ACTION);
    // ApiCall().then((res) => dispatch(SUCCESS_ACTION(res.data)));
    dispatch(SUCCESS_ACTION(data));
  };

  const addCart = (elem, dis) => {
    dis ? dispatch(ADD_ACTION(elem)) : dispatch(DELETE_ACTION(elem.name));
  };

  return state.isLoading ? (
    <SkeletonFunc />
  ) : (
    <>
      <Flex gap="3" w="90%" m="auto" justifyContent={"flex-end"}></Flex>
      <Grid
        width="90%"
        m="auto"
        gap="8"
        mt="10"
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
      >
        {state.data?.map((elem) => {
          return <FoodBox elem={elem} addCart={addCart} />;
        })}
      </Grid>
    </>
  );
}
