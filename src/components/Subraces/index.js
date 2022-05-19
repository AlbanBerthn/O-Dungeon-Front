// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';// == Import : local

import Loading from '../Loading';

import './subraces.scss';

function Subraces() {
  const loading = useSelector((state) => state.races.loading);
  const currentRace = useSelector((state) => state.races.currentRace);
  const currentSubRace = useSelector((state) => state.races.currentRace.subraces);

  if (loading) {
    return <Loading />;
  }
  return (
    <main className="subraces">
      <section className="subraces__mainclass" id="subraces">
        <h2 className="subraces__mainclass--title">{currentRace.name}</h2>
        <img className="subraces__img" src={`data:image/png;base64,${currentRace.image}`} alt="race" />
        <p className="subraces__mainclass--description">
          {currentRace.fullDescription}
        </p>
      </section>
      <h2 className="subraces__title">Sous-race</h2>
      <section className="subraces__presentation">
        {currentSubRace && currentSubRace.map((subRace) => (
          <div key={subRace.id} className="subraces__presentation--card">
            <h3>{subRace.name}</h3>
            <p>
              <span>Description</span>: {subRace.description}
            </p>
            <div>
              <span>{subRace.trait}</span>
              <p>Charisme:{subRace.charisma}</p>
              <p>Constitution:{subRace.constitution}</p>
              <p>Dextérité:{subRace.dexterity}</p>
              <p>Intelligence:{subRace.intelligence}</p>
              <p>Force:{subRace.strength}</p>
              <p>Sagesse:{subRace.wisdom}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Subraces;
