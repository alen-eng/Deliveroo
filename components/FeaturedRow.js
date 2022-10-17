import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurentCards from './RestaurentCards'
import sanityClient from '../sanity'
const FeaturedRow = ({id,title,description}) => {
  const [restaurents, setRestaurants]= useState([]);
  useEffect(()=>{
      sanityClient.fetch(`
      *[_type == "featured" && _id == $id ] {
         ...,
        restaurents[] -> {
         ...,
          dishes[] ->,
      type -> {
        name
      }
        },
      }[0]
      `, {id}).then((data) =>{
         setRestaurants(data?.restaurents);
      });
  },[])


  return (
    <View>
     <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB'/>
     </View>
     <Text className='text-xs text-gray-500 px-4'>{description}</Text>

     <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal:15
      }}
      showsHorizontalScrollIndicator={false}
      className='pt-4'
     >

       {restaurents?.map(restaurents => (
         <RestaurentCards
         key={restaurents._id}
         id= {restaurents._id}
         imagUrl={restaurents.image}
         title={restaurents.name}
         rating={restaurents.rating}
         genre={restaurents.type?.name}
         address={restaurents.address}
         short_description={restaurents.short_description}
         dishes={restaurents.dishes}
         long={restaurents.long}
         lat={restaurents.lat}
      />
       ))} 

     </ScrollView>
    </View>
  );
};

export default FeaturedRow