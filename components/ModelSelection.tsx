"use client"

import useSWR from "swr"
import Select, { SingleValue } from "react-select"

interface OptionType {
    value: string;
    label: string;
}

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

function ModelSelection() {
    const { data: models, isLoading } = useSWR("models", fetchModels)
    const { data: model, mutate: setModel } = useSWR("model", {
        fallbackData: "text-davinci-003"
    })

    return <div>
        <Select 
            className="mt-2"
            options={models?.modelOptions}
            defaultValue={model}
            placeholder={model}
            isSearchable
            isLoading={isLoading}
            menuPosition="fixed"
            styles={{
                control: (state) => ({
                    backgroundColor: '#434654', 
                    borderColor: '#434654',
                })
            }}
        onChange={(e: SingleValue<OptionType>) => setModel(e?.value)}
        />
    </div>
}

export default ModelSelection
