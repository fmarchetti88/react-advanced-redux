# Corso React Avanzato #
Esempio di applicazione con Redux, ErrorBoundary, RenderProps, LazyLoading, ReactRouter, HOC, AppContext, Internazionalization (i18n), Portal, Refs (Simple, DOM, Component, Callback), Memoization, Hooks

1. **npm install**
2. **npm run start**

## Appunti vari *Hooks* ##
- **useEffect** (*basic*): viene utilizzato per lavorare con il ciclo di vita del Component. Senza *return* equivale al *componentDidMount* + *componentDidUpdate*. Con *return*, invece, equivale a *componentDidMount* + *componentDidUpdate* + *componentWillUnmount*. Il secondo parametro è l'array delle dipendenze che viene valutato per poter riscatenare il *componentDidUpdate* (specificando un array di dipendenze vuoto, è come se eseguissimo il codice solo una volta al *componentDidMount*).
- **useContext** (*basic*): viene utilizzato per gestire il contesto (Context API) di React.
- **useRef** (*additional*): restituisce un offetto *ref mutable*, in cui la prorietà *.current* + inizializzata usando argomento passato (valore iniziale).
- **useReducer** (*additional*): viene utilizzato per gestire logiche di stato complesse in alternativa a *useState*. Funziona in modo simile a *Redux*.
- **useMemo** (*additional*): viene utilizzato per sfruttare la tecnica di *memoization* su un calcolo complesso.
- **useCallback** (*additional*): viene utilizzato per ottimizzare il passaggio di funzioni di callback come *props* a componenti figli, utilizzando la *memoization*.
 ```js
    const callback = useCallback(fn, [a, b])
    // ...equivale a...
    const callback = useMemo(() => fn, [a, b])
```
- **useLayoutEffect** (*additional*): è identico allo *useEffect*, ma si attiva (in modo sincrono) solo dopo aver applicato mutazioni al DOM (non al Virtual DOM!).
- **useDebugValue** (*additional*): viene utilizzato per visualizzare un'etichetta nei *React DevTools* quando si sviluppano hook custom.

Gli hook sono funzioni JavaScript, ma impongono due regole aggiuntive:
- Non invocare hook all'interno di loop, condizioni o funzioni nidificate
- Invocare hook solo da Funcion Component. Non chiamare hook da normali funzioni JavaScript.
- C'è solo un altro posto valido per chiamare un hook: all'interno di **Hook custom** (vedi library *react-hookedup*).

E' possibile definire dei custom hook al fine di incapsulare una logica specifica senza dover scrivere un HOC ed evitare il wrapper hell (costruire i propri hook consente di estrarre la logica dei componenti in funzioni riutilizzabili).
Esiste una convenzione secondi cui le funzioni che implementano un hook devono sempre avere un nome che inizia con **use**, seguito dal nome dell'hook con la prima lettera maiuscola.
Si possono sviluppare hook personalizzati che coprono una vasta gamma di casi d'uso
- gestione de moduli
- animazioni
- subscription
- timer
- ecc...

Di solito, ha più senso scrivere prima i Component e poi in seguito estratto un hook personalizzato da essa se risulta evidente che un codice simile viene riutilizzato su più Component.