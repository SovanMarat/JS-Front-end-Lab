type TypeContent = {
  name: string;
  title: string;
  subtitle: string;
  src?: string;
  isLeft: boolean;
};

export const dataContent: Array<TypeContent> = [
  {
    name: 'tv',
    title: 'Enjoy on your TV.',
    subtitle: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    src: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v',
    isLeft: false,
  },

  {
    name: 'watch-offline',
    title: 'Download your shows to watch offline.',
    subtitle: 'Save your favorites easily and always have something to watch.',
    isLeft: true,
  },

  {
    name: 'watch-everywhere',
    title: 'Watch everywhere.',
    subtitle: ' Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
    isLeft: false,
  },

  {
    name: 'kids-profiles',
    title: ' Create profiles for kids.',
    subtitle:
      'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    isLeft: true,
  },
];
