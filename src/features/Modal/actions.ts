export const actions = {
  toggleModal: (payload: boolean) => ({ type: 'IS_OPEN', payload } as const)
}
