export const randInt = (max: number) =>
  Math.floor(Math.random() * Math.floor(max));

export const uniqueId = (length: number = 3) =>
  Math.random().toString(36).slice(-length);

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function scrollToBottom(page: any) {
  await page.evaluate(async () => {
    await new Promise((resolve: any) => {
      const rand = () => Math.round(Math.random() * 10);

      const totalDistanceToScroll = 3000;
      var distanceScrolled = 0;
      
      var timer = setInterval(() => {          
        var distance = rand() * 100;

        window.scrollBy(0, distance);
        distanceScrolled += distance;

        if (distanceScrolled >= totalDistanceToScroll) { // Add timeout for scrolling too
          clearInterval(timer);
          resolve();
        }
      }, rand() * 1000);
    });
});
}