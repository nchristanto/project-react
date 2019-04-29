import React from 'react';
import './App.css';
import AppBar from './components/AppBar'
import Jumbotron from './components/Jumbotron'
import { NavigationBar } from './components/NavigationBar'
import RecipeReviewCard from './components/RecipeReviewCard'
import MusicPlayer from './components/MusicPlayer'
import BottomNavigation from './components/BottomNavigation'

function App() {
  return (
    <div class = "container">
    <AppBar />
      <div className = "jumbotron">
      <Jumbotron />
      </div>
      <NavigationBar />
        <div className = "card">
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
        </div>
        <div>
          <MusicPlayer />
        </div>
      <BottomNavigation />
    </div>
  );
}

export default App;
