test('sleep for 786 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 786));
});