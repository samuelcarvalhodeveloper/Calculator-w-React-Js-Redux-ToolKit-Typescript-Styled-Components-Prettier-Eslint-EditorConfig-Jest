/* eslint-disable no-unused-vars */
export default interface CharactersFactoryInterface<T, U> {
  getCharacter(wantedCharacter: T): U;
}
