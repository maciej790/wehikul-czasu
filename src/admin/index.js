import CMS from 'netlify-cms'

import { UuidControl, UuidPreview } from 'netlify-cms-widget-uuid-v4'

CMS.init()

CMS.registerWidget('uuid', UuidControl, UuidPreview)
