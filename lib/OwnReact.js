const FunctionComponent = 0; // stała reprezentująca rodzaj Fibera z komponentem funkcyjnym
const HostRoot = 3; // stała reprezentująca rodzaj Fibera z elementem DOM kontenera aplikacji
const HostComponent = 5; // stała reprezentująca rodzaj Fibera z elementem DOM
let workInProgressRoot = null; // Fiber związany z kontenerem aplikacji
let workInProgress = null; // Fiber, który reprezentuje aktualną pracę do wykonania

/*
funkcja kończąca jednostkę pracy
wykorzystując wcześniej stworzone powiązania, przechodzi po wszystkich Fiberach
i dla każdego Fibera, który reprezentuje element DOM
tworzy ten element i zapisuje referencje w polu `stateNode`
*/
function completeUnitOfWork(unitOfWork) {
  console.log(['completeUnitOfWork'], unitOfWork);
  // TODO

  return null;
}

/*
funkcja aktualizująca właściwości elementu DOM związanego z Fiberem
jako argument dostaje Fiber
*/
function updateProperties(fiber) {
  console.log(['updateProperties'], { fiber });
  // TODO
}

/*
funkcja dołącza do najbliższego rodzica elementu DOM znalezionego w wzwyż w hierarchii Fiberów
jako argument dostaje Fiber, który jest aktualnie iterowany podczas rekurencyjnego przeglądania struktury Fiberów
*/
function commitWork(fiber) {
  console.log(['commitWork'], { fiber });
  // TODO
}

/*
funkcja tworząca powiązania Fibera do jego dzieci w postaci powiązanych Fiberów
w procesie dla wszystkich dzieci Fibera zostaną utworzone własne Fibery
*/
function reconcileChildren(fiber, children) {
  console.log(['reconcileChildren'], { fiber, children });
  // TODO
}

/*
funkcja rozpoczynająca pracę
jako argument dostaje Fiber
zwraca dziecko Fibera po wykonaniu procesu rekoncyliacji(org. reconciliation)
*/
function beginWork(unitOfWork) {
  console.log(['beginWork'], { unitOfWork });
  // TODO

  return null;
}

/*
wykonuje jednostkę pracy
jako argument dostaje Fiber
zwraca następną jednostkę pracy
*/
function performUnitOfWork(unitOfWork) {
  workInProgress && console.log(['performUnitOfWork'], { unitOfWork });
  // TODO

  return null;
}

/*
funkcja rozpoczyna pracę na root'cie, czyli Fiberem związanych z kontenerem aplikacji (<div id="root" />)
efektem końcowym jest wyrenderowana aplikacja (DOM)
*/
function performSyncWorkOnRoot() {
  console.log(['performSyncWorkOnRoot']);
  // TODO
}

// rozpoczynamy nieskończoną pętle, która sprawdza czy jest jakaś praca do wykonania
// funkcja requestIdleCallback rejestruje do wykonania funkcję i wywołuje ją w momencie gdy przeglądarka jest bezczynna
// docs: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback
// TODO

/*
funkcja tworząca nowy Fiber
jako argument otrzymuje obiekt z interfejsem
element - element React, dla którego tworzony jest Fiber
tag - rodzaj Fibera
parentFiber - Fiber rodzica
stateNode - element DOM, z którym powiązany jest tworzony Fiber
zwraca nowy Fiber
*/
function createFiber({ element, tag, parentFiber = null, stateNode = null }) {
  console.log(['createFiber'], { element, tag, parentFiber, stateNode });
  // TODO
}

/*
wykorzystywana przez babel, funkcja do zamiany JSX na elementy React
jako argumenty dostajemy kolejno:
- typ elementu, np. div albo App
- propsy elementu bez dzieci
- kolejne dzieci elementu, czyli tekst albo inny element

zwraca element React, który składa się z propsów oraz typu elementu
*/
function createElement(type, props, ...children) {
  console.log(['createElement'], { type, props, children });
  // TODO
}

/*
funkcja tworząca pierwszą jednostkę pracy, która jest związana z kontenerem aplikacji
*/
function render(element, container) {
  console.log(['render'], { element, container });
  // TODO
}

/*
api biblioteki
*/
export default {
  createElement,
  render,
};