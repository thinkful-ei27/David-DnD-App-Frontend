import React, { Component } from 'react';
import '../styles/modifier-card.css'


class RaceModifierCard extends Component {
  calcRaceModifer(race) {
    let raceMod = {
      raceStrMod : 0,
      raceDexMod : 0,
      raceConstMod : 0,
      raceIntMod : 0,
      raceWisMod : 0,
      raceCharMod : 0
    }
    switch(race) {

      case "Aarakocra":

        raceMod.raceDexMod = 2;
        raceMod.raceWisMod = 1;
        break;

      case "Aasimar":

        raceMod.raceCharMod = 2;
        break;

      case "Bugbear":

        raceMod.raceStrMod = 2;
        raceMod.raceDexMod = 1;
        break;

      case "Centaur":

        raceMod.raceStrMod = 2;
        raceMod.raceWisMod = 1;
        break;

      case "Changeling": //case 5 is a special case ----------------------------------------------------

        const ranVal = Math.floor(Math.random() * 1)
        if (ranVal === 0) {
          raceMod.raceDexMod += 1;
        }
        else{
          raceMod.raceIntMod +=  1;
        }
        raceMod.raceCharMod +=  2;
        break;

      case "Dragonborn":

        raceMod.raceStrMod = 2;
        raceMod.raceCharMod = 1;
        break;

      case "Dwarf":

        raceMod.raceConstMod = 2;
        break;

      case "Elf":

        raceMod.raceDexMod = 2;
        break;

      case "FearlTiefling":

        raceMod.raceDexMod = 2;
        raceMod.raceIntMod = 1;
        break;

      case "Firblog":

        raceMod.raceWisMod = 2;
        raceMod.raceStrMod = 1;
        break;

      case "Genasi":

        raceMod.raceConstMod = 2;
        break;

      case "Gith":

        raceMod.raceIntMod = 1;
        break;

      case "Gnome":

      raceMod.raceIntMod = 2;
        break;

      case "Goblin":

        raceMod.raceDexMod = 2;
        raceMod.raceConstMod = 1;
        break;

      case "Goliath":

        raceMod.raceStrMod = 2;
        raceMod.raceConstMod = 1;
        break;

      case "Half-Elf": //special one -----------------------------------------------------

        raceMod.raceCharMod = 2;

        let halfelfstat1;
        halfelfstat1 = Math.floor(Math.random() * 5 + 1);
        switch(halfelfstat1) {
          case 1:
            raceMod.raceStrMod = 1;
            break;
          case 2:
            raceMod.raceDexMod = 1;
            break;
          case 3:
            raceMod.raceConstMod = 1;
            break;
          case 4:
            raceMod.raceIntMod = 1;
            break;
          default:
            raceMod.raceWisMod = 1;
            break;
        }

        let halfelfstat2;
        halfelfstat2 = Math.floor(Math.random() * 5 + 1);
        switch(halfelfstat2) {
          case 1:
            raceMod.raceStrMod += 1;
            break;
          case 2:
            raceMod.raceDexMod += 1;
            break;
          case 3:
            raceMod.raceConstMod += 1;
            break;
          case 4:
            raceMod.raceIntMod += 1;
            break;
          default:
            raceMod.raceWisMod += 1;
            break;
        }

        break;

      case "Halfing":

        raceMod.raceStrMod = 2;
        raceMod.raceConstMod = 1;
        break;

      case "Half-Orc":

        raceMod.raceStrMod = 2;
        raceMod.raceConstMod = 1;
        break;

      case "Hobgoblin":

        raceMod.raceConstMod = 2;
        raceMod.raceIntMod = 1;
        break;

      case "Human":

        raceMod.raceStrMod = 1;
        raceMod.raceDexMod = 1;
        raceMod.raceConstMod = 1;
        raceMod.raceIntMod = 1;
        raceMod.raceWisMod = 1;
        raceMod.raceCharMod = 1;
        break;

      case "Kalashtar":

        raceMod.raceCharMod = 1;
        raceMod.raceWisMod = 1;
      let kalashtarstat;
      kalashtarstat = Math.floor(Math.random() * 6 + 1);
      switch(kalashtarstat) {
        case 1:
          raceMod.raceStrMod = 1;
          break;
        case 2:
          raceMod.raceDexMod = 1;
          break;
        case 3:
          raceMod.raceConstMod = 1;
          break;
        case 4:
          raceMod.raceIntMod = 1;
          break;
        case 5:
          raceMod.raceWisMod = 1;
          break;
        default:
          raceMod.raceCharMod = 1;
          break;
      } 
      break;

      case "Kenku":

        raceMod.raceDexMod = 2;
        raceMod.raceWisMod = 1;
        break;

      case "Kobold":

        raceMod.raceDexMod = 2;
        raceMod.raceStrMod = 2;
        break;

      case "Lizardfolk":

        raceMod.raceConstMod = 2;
        raceMod.raceWisMod = 1;
        break;

      case "Loxodon":

        raceMod.raceConstMod = 2;
        raceMod.raceWisMod = 1;
        break;

      case "Minotaur":

        raceMod.raceStrMod = 2;
        raceMod.raceConstMod = 1;
        break;

      case "Orc":

        raceMod.raceStrMod = 2;
        raceMod.raceConstMod = 1;
        raceMod.raceIntMod = 2;
        break;

      case "Shifter":

      raceMod.raceDexMod = 1;
        break;

      case "SimicHybrid":

      raceMod.raceConstMod =  2;
          let simichybridstat;
          simichybridstat = Math.floor(Math.random() * 6 + 1);
          switch(simichybridstat) {
            case 1:
              raceMod.raceStrMod = 1;
              break;
            case 2:
              raceMod.raceDexMod = 1;
              break;
            case 3:
              raceMod.raceConstMod = 1;
              break;
            case 4:
              raceMod.raceIntMod = 1;
              break;
            case 5:
              raceMod.raceWisMod = 1;
              break;
            default:
              raceMod.raceCharMod = 1;
              break;
      }
          break;

      case "Tabaxi":

        raceMod.raceDexMod = 2;
        raceMod.raceCharMod = 1;
        break;

      case "Tiefling":

        raceMod.raceCharMod = 2;
        raceMod.raceIntMod = 1;
        break;

      case "Tortle":

        raceMod.raceStrMod = 2;
        raceMod.raceWisMod = 1;
        break;

      case "Triton":

        raceMod.raceStrMod = 1;
        raceMod.raceConstMod = 1;
        raceMod.raceCharMod = 1;
        break;

      case "Vedalken":

        raceMod.raceIntMod = 2;
        raceMod.raceWisMod = 1;
        break;

      case "Viashino":

        raceMod.raceDexMod = 2;
        raceMod.raceStrMod = 1;
        break;

      case "Warforged":

        raceMod.raceConstMod = 1;
        break;

      case "Yuan-tiPureblood":

        raceMod.raceCharMod = 1;
        raceMod.raceIntMod = 1;
        break;

      default:
        break;
  }
  return raceMod;
}

  
  render() {
    const raceMod = this.calcRaceModifer(this.props.character.race)
    console.log("RaceMod is: ", raceMod)
    return (
      <p className="modifier-card">
        -=Race Stat Modifiers=-<br></br>
        Strength-Mod: {raceMod.raceStrMod} <br></br>
        Dexterity-Mod: {raceMod.raceDexMod} <br></br>
        Constitution-Mod: {raceMod.raceConstMod} <br></br>
        Intelligence-Mod: {raceMod.raceIntMod} <br></br>
        Wisdom-Mod: {raceMod.raceWisMod} <br></br>
        Charisma-Mod:{raceMod.raceCharMod} <br></br>
      </p>
    );
  }
}


export default RaceModifierCard;