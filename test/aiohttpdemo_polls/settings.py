# # settings.py
# import argparse
import pathlib
import  yaml

# from trafaret_config import commandline

# from aiohttpdemo_polls.utils import TRAFARET


BASE_DIR = pathlib.Path(__file__).parent.parent
DEFAULT_CONFIG_PATH = BASE_DIR / 'config' / 'polls.yaml'

def get_config(path):
    with open(path)as f:
        config = yaml.safe_load(f)
        return config
config = get_config(DEFAULT_CONFIG_PATH)

# def get_config(argv=None):
#     ap = argparse.ArgumentParser()
#     commandline.standard_argparse_options(
#         ap,
#         default_config=DEFAULT_CONFIG_PATH
#     )

#     # ignore unknown options
#     options, unknown = ap.parse_known_args(argv)

#     config = commandline.config_from_options(options, TRAFARET)
#     return config


