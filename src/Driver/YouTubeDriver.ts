import Driver from './Driver';
import { randInt, wait, scrollToBottom } from '../utils';

type WatchVideoParams = {
  videoUrl?: string;
  fromCurrentPage?: boolean;
}

export default class YouTubeDriver extends Driver {
  tasks = [
    this.exploreTrending,
    this.searchVideos,
    this.watchVideo,
  ];

  videoDiscoveryTasks = [
    this.exploreTrending
  ]

  currentUrl?: string;
  videoUrl?: string;

  async exploreTrending(watchFromCurrentPage?: boolean) {
    console.log(`${this.constructor.name}: Exploring trending videos.`);

    await this.page.goto('https://www.youtube.com/feed/explore');
    await scrollToBottom(this.page);

    if (watchFromCurrentPage) {
      await this.watchVideo({
        fromCurrentPage: watchFromCurrentPage
      });
    }
  }

  async searchVideos() {
    console.log(`${this.constructor.name}: Searching videos.`);
  }
  
  async watchVideo(params: WatchVideoParams) {
    console.log(`${this.constructor.name}: Watching video.`);

    while (!this.videoUrl) await this.runVideoDiscovery();
    this.videoUrl = params.videoUrl || this.videoUrl;
  }

  async runVideoDiscovery() {
    const taskIndex = randInt(this.videoDiscoveryTasks.length);
    await this.videoDiscoveryTasks[taskIndex].call(this);
  }
}