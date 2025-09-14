import NProgressConfig from 'nprogress';

NProgressConfig.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: true,
  trickleSpeed: 200,
});

export { NProgressConfig };
