test('sleep for 190 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 190));
});