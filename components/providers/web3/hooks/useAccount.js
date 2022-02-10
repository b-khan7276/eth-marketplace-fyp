

import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {
  "0x118ea763d63a0277f4e4231d487677499c7d2f33bd1c7b1ca34a5456f1687307": true
}

export const handler = (web3, provider) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()
      return accounts[0]
    }
  )

  useEffect(() => {
    provider &&
    provider.on("accountsChanged",
      accounts => mutate(accounts[0] ?? null)
    )
  }, [provider])

  return {
    account: {
      data,
      isAdmin: (
        data &&
        adminAddresses[web3.utils.keccak256(data)]) ?? false,
      mutate,
      ...rest
    }
  }
}