import React, {Suspense} from 'react';

import Header from '../components/landingPageComponents/Header';
import Categories from '../components/landingPageComponents/Categories';
import Products from '../components/landingPageComponents/Products';
import Banner from '../components/landingPageComponents/Banner';
import Collections from '../components/landingPageComponents/Collections';
import Sales from '../components/landingPageComponents/Sales';
import Support from '../components/landingPageComponents/Support';
import Subscription from '../components/landingPageComponents/Subscription';
import Footer from '../components/Footer';
import { trendingTShirtsData, featuredProductsData, newProductsData, bestSellingProductsData } from '../constants/data';
import images from '../assets/index';

const LandingPage = () => {
  return (
    <div className='absolute top-[3.5rem] w-full'>
        <Header/>
        <Categories/>
        <Products title={'Trending T-Shirts'} products={trendingTShirtsData}/>
        <Products title={'Featured Products'} products={featuredProductsData}/>
        <Banner banner={images.banner1}/>
        <Products title={'New Products'} products={newProductsData}/>
        <Products title={'Best Selling Products'} products={bestSellingProductsData}/>
        <Collections />
        <Banner banner={images.banner2}/>
        <Sales />
        <Support />
        <Subscription />
        <Footer />
    </div>
  )
}

export default LandingPage