test('sleep for 496 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 496));
});