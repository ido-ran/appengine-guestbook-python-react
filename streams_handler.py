import webapp2
import json

class StreamsHandler(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'application/json'
        res_obj = {
            'result': 9912,
            'payload': 'this is stream'
        }
        self.response.out.write(json.dumps(res_obj))
