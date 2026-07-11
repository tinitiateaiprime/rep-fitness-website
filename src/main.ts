import './styles.css';
import heroImage from './assets/hero-fitness.png';
import { mountApp } from './app';
import { attachComparisonSlider } from './interactions';

mountApp(heroImage);
attachComparisonSlider();
