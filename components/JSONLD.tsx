export default function JSONLD({data}:{data:object}){return <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}/>}
