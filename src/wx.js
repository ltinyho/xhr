import Xhr from './xhr'
import EngineWrapper from './engine-wrapper'
import adapter from './adapter/wx'

const wxEngine = EngineWrapper(adapter)

export default function () {
    return new Xhr(wxEngine)
}

const wxXhr from 'xhr/dist/wx'
wxXhr.default.cache = {}
const xhr = new wxXhr(config)
xhr({})