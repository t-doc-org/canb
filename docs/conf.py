# Copyright 2026 Brice Canvel <brccvl@proton.me>
# SPDX-License-Identifier: CC-BY-NC-SA-4.0

from tdoc.common.defaults import *

project = "Documents de cours"
author = "Brice Canvel"
license = 'CC-BY-NC-SA-4.0'
language = 'fr'

exclude_patterns = ['_include/**']
myst_links_external_new_tab = True
myst_footnote_transition = False

html_theme_options = {
    'repository_url': 'https://github.com/t-doc-org/canb',
    'show_navbar_depth': 2,
    'show_toc_level': 2,
}

metadata = {
    'solutions': 'dynamic',
}

metadata = {
    'points': {
        'text': [" ({0} pt)", " ({0} pts)"],
    },
    'exec': {'pnm': {}},
    'chartjs': {
        'plugins': {
            'deferred': False,  # Interferes with printing
        },
    },
}
