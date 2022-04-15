import { ChainId } from '@photonswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.CRONOSTEST]: '0x9d5A7f8c36F26B2D0f52DB553a1f1236f071200f',
  [ChainId.CRONOSMAINNET]: '0x361Ab0c6cB488cCF262f46662aba77D621FcE626',
  [ChainId.CASSINI]: '0x1b81c335931f2D783dE929E20A8c80431DAdA5fC',
  [ChainId.BSC_TEST_NET]: '0x1b81c335931f2D783dE929E20A8c80431DAdA5fC',
  [ChainId.MUMBAI_TESTNET]: '0x1b81c335931f2D783dE929E20A8c80431DAdA5fC',
  [ChainId.EVMOS_TESTNET]: '0xB7D0AE4E4d1343bc5e3fE940DA06D84350cdbCE8',
  [ChainId.KAVA_TESTNET]: '0x8a340F39A468C2FcBFFf2122446a9A0745A313Ad',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }