
# list files & directories in current working directory

import os 

curr_dir = os.getcwd()

for entry in os.listdir( curr_dir ):
    print( entry )
    
