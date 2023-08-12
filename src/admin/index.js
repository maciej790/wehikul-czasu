// src/js/cms.js or wherever you set this file up
import CMS from "netlify-cms-app";

import {Widget as RelationWidget} from "@ncwidgets/file-relation";
import {Widget as IdWidget} from "@ncwidgets/id";

// use 'ncw-file-relation' in config.yml
CMS.registerWidget(RelationWidget);

// use 'ncw-id' in config.yml
CMS.registerWidget(IdWidget);

/* If you prefer to use your own widget name in config.yml, do this
 * CMS.registerWidget({
 *   name: 'my-custom-name',
 *   ...RelationWidget, 
 * })
 */

CMS.init();