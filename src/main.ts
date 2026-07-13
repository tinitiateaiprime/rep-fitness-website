import './styles.css';
import heroImage from './assets/hero-fitness.png';
import { mountApp } from './app';
import { attachComparisonSlider, attachRoutineSetter } from './interactions';
import { attachRoutineNotificationBridge, registerNotificationWorker } from './notifications';

void registerNotificationWorker();

mountApp(heroImage);
attachComparisonSlider();
attachRoutineSetter();
attachRoutineNotificationBridge();
