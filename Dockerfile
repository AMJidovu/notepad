FROM node

WORKDIR /var/lib/notepad

# Install packages
COPY package.json ./
COPY yarn.lock ./
RUN yarn

# Copy into container
COPY . .

# Build
RUN yarn build

# Database volume
VOLUME /var/lib/notepad/database

# Run the code
CMD [ "yarn", "start" ]