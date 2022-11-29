type Heros = 'Hulk' | 'Capt' | 'Thor'

type HeroAges = {[K in Heros]:number}






const ages:HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000
}