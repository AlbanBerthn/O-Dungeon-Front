// ==npm
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// ==components
import Card from '../Card';
// ==Actions
import { fetchClasses } from '../../actions/classes';
// ==CSS
import './classes.scss';

function Classes() {
  const classesList = useSelector((state) => state.classes);
  const dispatch = useDispatch();
  console.log(classesList);
  // au montage du composant principal
  useEffect(
    () => {
      // je veux charger les classes, je demande au store
      dispatch(fetchClasses());
    },
    [], // permet de charger une seule fois la liste
  );

  return (
    <main>
      <h1>Classes</h1>
      <div className="classes__cards">
        { classesList.map((classe) => (
          <Card key={classe.id} name={classe.name} description={classe.description} />
        ))}
      </div>
    </main>
  );
}

export default Classes;
