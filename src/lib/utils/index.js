export const checkWallet = async () => {
  const { ethereum } = window;
  if(!ethereum) {
    return new Error('需要链接钱包')
  }
  return ethereum;
}


