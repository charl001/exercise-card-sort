import { CardEvent, Transaction } from './types'

type CardTransactionMapping = {
  [cardId: string]: Transaction
}

/**
 * Write a function that receives a large batch of card events from multiple cards,
 * returning an object which maps from cardId -> valid transaction. Only cardIds with
 * a valid transaction should appear in the returned object.
 *
 * A valid transaction is a pair of card events, starting with a RESERVATION event
 * and finishing with either a CONFIRMATION or CANCELLATION event.
 *
 * The input is an array of unprocessed card events. Some events might be duplicated
 * or missing. For duplicated events, you may only use one of its occurrences and
 * discard the rest. Missing events invalidate the transaction.
 *
 * @param cardEvents CardEvent[] List of card events
 * @returns CardTransactionMapping Valid transactions grouped by cardId
 */
export const processCardEvents = (cardEvents: CardEvent[]): CardTransactionMapping => {
  let obj: any = {}
  for(let i=0;i<cardEvents.length-1;i++){
    for(let j=i+1;j<cardEvents.length;j++){
      if((cardEvents[i].type==="RESERVATION") && (cardEvents[i].cardId===cardEvents[j].cardId) && (cardEvents[j].type=="CONFIRMATION"||cardEvents[j].type=="CANCELLATION")){
                {
                  if(!(cardEvents[i].cardId in obj)){
                  obj[cardEvents[i].cardId]=[cardEvents[i],cardEvents[j]]
                  }
                }
              }
    }
 //Note:Try to implement using js. if not working properly, please go through logic. Thanks
  }
   // return obj; 
  return obj as CardTransactionMapping
}
