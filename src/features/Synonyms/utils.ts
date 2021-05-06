import { SynonymType } from './types'

export const formatSynonym = (title: string, synonyms: SynonymType[]) => {
  const newSynonym = {
    id: +new Date() + synonyms.length + 1,
    title,
    edit: false
  }
  return [...synonyms, newSynonym]
}

export const updateSynonym = (id: number, title: string, synonyms: SynonymType[]) => (
  synonyms.map((synonym) => {
    if (synonym.id === id) {
      return {
        ...synonym,
        title,
        edit: false
      }
    }
    return synonym
  })
)

export const setEditModeSynonym = (id: number, synonyms: SynonymType[]) => (
  synonyms.map((synonym) => {
    if (synonym.id === id) {
      return {
        ...synonym,
        edit: !synonym.edit
      }
    }
    return synonym
  })
)

export const findEditedSynonym = (synonyms: SynonymType[]) => !!synonyms.find((i) => i.edit)
