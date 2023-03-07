import { LoadingIcon } from "../../shared/components/LoadingIcon"
import { useLabels } from "../hooks/useLabels"
import { FC } from 'react';

interface Props {
  selectedLabels: string[]
  onChange: (labelName: string) => void
}


export const LabelPicker: FC<Props> = ({ selectedLabels, onChange }) => {

  const labelsQuery = useLabels()

  if (labelsQuery.isLoading) //!Por que isLoading: es cuando cargas la data por primera vez y no tienen nada de data ni en cache,   isFetching: se dispara siempre que hacemos una peticion
    return (<LoadingIcon />)

  return (
    <div>
      {
        labelsQuery.data?.map(label => (
          <span
            key={label.id}
            className={`badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name) ? 'label-active' : ""}`}
            style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
            onClick={() => onChange(label.name)}
          >
            {label.name}
          </span>

        ))
      }

    </div>
  )
}
