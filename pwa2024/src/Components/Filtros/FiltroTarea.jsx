import { FilterButton } from "./FilterButton";
import { FilterButtonContainer } from "./FilterButtonContainer";
import { FiltersContainer } from "./FiltersContainer";
import { ItemsLeft } from "./ItemsLeft";
import Button from "../Button/Button";

//Es una buena solucion, sin embargo
//aca lo mejor hubiera sido mandar el activeFilter y una funcion setActiveFilter, en el cual se mande por parametro cual es
//el filtro activo que se aplico.
const FiltroTarea = ({
  total,
  activeFilter,
  showAllTareas,
  showActiveTareas,
  showCompletedTareas,
  handleClearComplete,
  addTarea,
}) => {
  return (
    <FiltersContainer>
      <ItemsLeft total={total} />
      <FilterButtonContainer>
        <FilterButton
          action={() => showAllTareas()}
          active={activeFilter}
          filter="Todas"
        />
        <FilterButton
          action={() => showActiveTareas()}
          active={activeFilter}
          filter="Pendientes"
        />
        <FilterButton
          action={() => showCompletedTareas()}
          active={activeFilter}
          filter="Completas"
        />
      </FilterButtonContainer>
      <Button text="Borrar" onClick={handleClearComplete} />
    </FiltersContainer>
  );
};

export default FiltroTarea;
